import { StyleSheet, View, Text, ScrollView } from "react-native";

export default function App() {
  // Data Akademik Mahasiswa
  const mahasiswa = {
    nama: "M.Firdaus Hidayat",
    npm: "3125101311",
    prodi: "D3 Manajemen Informatika",
    semester: 3,
    ipk: 3.85,
    status: "Aktif",
  };

  // Data KHS / Mata Kuliah
  const mataKuliah = [
    {
      kode: "KK312408",
      nama: "Sistem Informasi Berbasis Mobile",
      sks: 3,
      nilai: "A",
      smt: 3,
    },
    {
      kode: "KU312411",
      nama: "Sistem Basis Data",
      sks: 3,
      nilai: "A-",
      smt: 1,
    },
    { kode: "KU312412", nama: "Desain UI/UX", sks: 3, nilai: "A", smt: 2 },
    {
      kode: "KK312409",
      nama: "Sistem Informasi Berbasis Web",
      sks: 3,
      nilai: "A+",
      smt: 3,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#eceff1", paddingTop: 50 }}>
      <Text style={styles.mainTitle}>Sistem Akademik Mahasiswa</Text>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 30 }}
      >
        <View
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 16,
            padding: 20,
            marginBottom: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 3,
            borderLeftWidth: 5,
            borderLeftColor: "#6ee51eff",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#1e88e5",
              fontWeight: "bold",
              letterSpacing: 1,
              marginBottom: 6,
            }}
          >
            [ INLINE STYLE ] PROFIL MAHASISWA
          </Text>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
              backgroundColor: "#dbeafe",
            }}
          >
            <Text
              style={{ fontSize: 26, fontWeight: "bold", color: "#1565c0" }}
            >
              MF
            </Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#212121",
              marginBottom: 2,
              textAlign: "center",
            }}
          >
            {mahasiswa.nama}
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: "#757575",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            NPM: {mahasiswa.npm} | {mahasiswa.prodi}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#f4f6f8",
              borderRadius: 10,
              padding: 12,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 12, color: "#757575" }}>Semester</Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#1565c0" }}
              >
                {mahasiswa.semester}
              </Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 12, color: "#757575" }}>IPK</Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#2e7d32" }}
              >
                {mahasiswa.ipk}
              </Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 12, color: "#757575" }}>Status</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#1565c0",
                  marginTop: 2,
                }}
              >
                {mahasiswa.status}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#212121",
    textAlign: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
